"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type GlobeMode = "continuous" | "interactive";

function NetworkSphere({ mode }: { mode: GlobeMode }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const network = useMemo(() => {
    const positions: number[] = [];
    const count = 190;
    const radius = 2.15;
    const points: THREE.Vector3[] = [];

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const ringRadius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      const point = new THREE.Vector3(
        Math.cos(theta) * ringRadius * radius,
        y * radius,
        Math.sin(theta) * ringRadius * radius
      );

      points.push(point);
      positions.push(point.x, point.y, point.z);
    }

    const edges: number[] = [];

    for (let i = 0; i < points.length; i++) {
      const nearest = points
        .map((point, index) => ({
          index,
          distance: points[i].distanceTo(point),
        }))
        .filter((item) => item.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 3);

      for (const item of nearest) {
        if (item.index > i) {
          const dx = Math.abs(points[i].x - points[item.index].x);
          const dy = Math.abs(points[i].y - points[item.index].y);

          // Exclude almost-vertical connections from the visible network.
          if (dx < 0.14 && dy > 0.12) {
            continue;
          }

          edges.push(
            points[i].x, points[i].y, points[i].z,
            points[item.index].x,
            points[item.index].y,
            points[item.index].z
          );
        }
      }
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(edges, 3)
    );

    return { pointGeometry, lineGeometry };
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    const active = mode === "continuous" || hovered;

    target.current.x = active ? pointer.current.y * 0.32 : 0;
    target.current.y = active ? pointer.current.x * 0.42 : 0;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      target.current.x,
      3,
      delta
    );

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      target.current.y +
        (mode === "continuous" ? 0 : 0),
      3,
      delta
    );

    if (mode === "continuous") {
      groupRef.current.rotation.y += delta * 0.10;
    }
  });

  return (
    <group position={[0, 0, 0]}
      ref={groupRef}
      onPointerMove={(event) => {
        pointer.current.x = event.pointer.x;
        pointer.current.y = event.pointer.y;
        setHovered(true);
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <sphereGeometry args={[2.18, 40, 40]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
        />
      </mesh>

      <points geometry={network.pointGeometry}>
        <pointsMaterial
          color="#E8E5DE"
          size={0.026}
          transparent
          opacity={0.88}
          sizeAttenuation
        />
      </points>

      <lineSegments geometry={network.lineGeometry}>
        <lineBasicMaterial
          color="#A4A6A5"
          transparent
          opacity={0.27}
        />
      </lineSegments>


      <mesh>
        <sphereGeometry args={[2.12, 32, 32]} />
        <meshBasicMaterial
          color="#777B7C"
          wireframe
          transparent
          opacity={0.045}
        />
      </mesh>    </group>
  );
}

export default function NetworkScene({ mode }: { mode: GlobeMode }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.0], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      frameloop="always"
    >
      <NetworkSphere mode={mode} />
    </Canvas>
  );
}











