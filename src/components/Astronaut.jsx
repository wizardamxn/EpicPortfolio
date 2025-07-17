import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/astronautModel.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);
  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition,{damping:30})
  useEffect(()=>{
    ySpring.set(-1)
  }, [ySpring])
  useFrame(()=>{
    group.current.position.y =ySpring.get()
  })


  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.0065}
      position={props.position || [2,-1,0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="4962bce79a1a4c96b552406d75505501fbx">
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Light"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group
                  name="Camera"
                  position={[735.889, 495.831, 692.579]}
                  rotation={[-Math.PI, 0.756, 2.68]}
                  scale={100}
                >
                  <group name="Object_8" />
                </group>
                <group
                  name="Light001"
                  position={[407.625, 590.386, -100.545]}
                  rotation={[1.89, 0.881, -2.045]}
                  scale={100}
                >
                  <group name="Object_10" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_11" />
                  </group>
                </group>
                <group
                  name="Camera001"
                  position={[735.889, 495.831, 692.579]}
                  rotation={[-Math.PI, 0.756, 2.68]}
                  scale={100}
                >
                  <group name="Object_13" />
                </group>
                <group name="Armature">
                  <group name="Object_15">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_52"
                      geometry={nodes.Object_52.geometry}
                      material={materials["Material.001"]}
                      skeleton={nodes.Object_52.skeleton}
                    />
                    <skinnedMesh
                      name="Object_53"
                      geometry={nodes.Object_53.geometry}
                      material={materials["Material.003"]}
                      skeleton={nodes.Object_53.skeleton}
                    />
                    <skinnedMesh
                      name="Object_54"
                      geometry={nodes.Object_54.geometry}
                      material={materials["Material.002"]}
                      skeleton={nodes.Object_54.skeleton}
                    />
                    <skinnedMesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials["Material.006"]}
                      skeleton={nodes.Object_55.skeleton}
                    />
                    <skinnedMesh
                      name="Object_56"
                      geometry={nodes.Object_56.geometry}
                      material={materials["Material.004"]}
                      skeleton={nodes.Object_56.skeleton}
                    />
                    <skinnedMesh
                      name="Object_57"
                      geometry={nodes.Object_57.geometry}
                      material={materials["Material.005"]}
                      skeleton={nodes.Object_57.skeleton}
                    />
                    <skinnedMesh
                      name="Object_58"
                      geometry={nodes.Object_58.geometry}
                      material={materials["Material.007"]}
                      skeleton={nodes.Object_58.skeleton}
                    />
                    <skinnedMesh
                      name="Object_59"
                      geometry={nodes.Object_59.geometry}
                      material={materials["Material.008"]}
                      skeleton={nodes.Object_59.skeleton}
                    />
                    <skinnedMesh
                      name="Object_60"
                      geometry={nodes.Object_60.geometry}
                      material={materials["Material.009"]}
                      skeleton={nodes.Object_60.skeleton}
                    />
                    <skinnedMesh
                      name="Object_61"
                      geometry={nodes.Object_61.geometry}
                      material={materials["Material.011"]}
                      skeleton={nodes.Object_61.skeleton}
                    />
                    <skinnedMesh
                      name="Object_62"
                      geometry={nodes.Object_62.geometry}
                      material={materials["Material.010"]}
                      skeleton={nodes.Object_62.skeleton}
                    />
                    <group
                      name="Object_51"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={[98.167, 100, 100]}
                    />
                  </group>
                </group>
                <group
                  name="Cube"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[98.167, 100, 100]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/astronautModel.glb");
