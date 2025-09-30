import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

// Partículas flutuantes conectadas
function Particles() {
  const points = useRef();
  const lines = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const particlesCount = 500;

  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const connections = [];

    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    return { positions, connections };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    if (points.current) {
      const positions = points.current.geometry.attributes.position.array;

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        // Movimento ondulante
        positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.002;
        positions[i3] += Math.cos(time + positions[i3 + 2]) * 0.001;

        // Influência do mouse
        const dx = mouse.x * 5 - positions[i3];
        const dy = mouse.y * 5 - positions[i3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 3) {
          positions[i3] += dx * 0.01;
          positions[i3 + 1] += dy * 0.01;
        }

        // Boundaries
        if (Math.abs(positions[i3]) > 10) positions[i3] *= 0.99;
        if (Math.abs(positions[i3 + 1]) > 10) positions[i3 + 1] *= 0.99;
      }

      points.current.geometry.attributes.position.needsUpdate = true;

      // Rotação suave
      points.current.rotation.y = time * 0.05;
      points.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#8b5cf6"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

// Ondas de energia
function EnergyWaves() {
  const waves = useRef([]);
  const wavesCount = 5;

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    waves.current.forEach((wave, i) => {
      if (wave) {
        wave.rotation.z = time * 0.2 + i * 0.5;
        wave.scale.setScalar(1 + Math.sin(time * 2 + i) * 0.3);
        wave.material.opacity = 0.1 + Math.sin(time * 3 + i) * 0.05;
      }
    });
  });

  return (
    <>
      {[...Array(wavesCount)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (waves.current[i] = el)}
          position={[0, 0, -5 + i * 2]}
        >
          <torusGeometry args={[3 + i * 0.5, 0.02, 16, 100]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </>
  );
}

// Raios elétricos
function Lightning() {
  const [bolts, setBolts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newBolt = {
          id: Date.now(),
          start: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, -5],
          end: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, 5],
        };
        setBolts(prev => [...prev, newBolt]);
        setTimeout(() => {
          setBolts(prev => prev.filter(b => b.id !== newBolt.id));
        }, 200);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bolts.map(bolt => (
        <line key={bolt.id}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...bolt.start, ...bolt.end])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#06b6d4"
            transparent
            opacity={0.8}
            blending={THREE.AdditiveBlending}
            linewidth={3}
          />
        </line>
      ))}
    </>
  );
}

// Grid retro flutuante
function RetroGrid() {
  const grid = useRef();

  useFrame(({ clock }) => {
    if (grid.current) {
      grid.current.position.z = ((clock.getElapsedTime() * 2) % 20) - 10;
      grid.current.material.opacity = 0.15;
    }
  });

  return (
    <mesh ref={grid} rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

// Componente principal
export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.5} />
        <Particles />
        <EnergyWaves />
        <Lightning />
        <RetroGrid />

        {/* Luz ambiente */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      </Canvas>
    </div>
  );
}
