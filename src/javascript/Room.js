import * as THREE from 'three'
import floorColorSource from '../images/floor/floor.jpg' //Floor texture
import woodFloorAmbientSource from '../images/WoodFloor/WoodfloorAmbientOcculsion.jpg' // Floor Ambient occlusion
import wallpaperColorSource from '../images/Wallpaper/WallpaperBasecolor.jpg' // Wall texture
import wallpaperNormalSource from '../images/Wallpaper/WallpaperNormal.jpg' // Wall normal
import wallpaperAmbientSource from '../images/Wallpaper/WallpaperAmbientOcclusion.jpg' // Wall ambient occlusion
import font from 'three/examples/fonts/helvetiker_bold.typeface.json'

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()


//Floor
const woodfloorColorTexture = textureLoader.load(floorColorSource)
woodfloorColorTexture.repeat.x = 6
woodfloorColorTexture.repeat.y = 6
woodfloorColorTexture.wrapS = THREE.RepeatWrapping
woodfloorColorTexture.wrapT = THREE.RepeatWrapping

const woodFloorAmbientTexture = textureLoader.load(woodFloorAmbientSource)
woodFloorAmbientTexture.wrapS = THREE.RepeatWrapping
woodFloorAmbientTexture.wrapT = THREE.RepeatWrapping

//Walls
const wallpaperColorTexture = textureLoader.load(wallpaperColorSource)
const wallpaperNormalTexture = textureLoader.load(wallpaperNormalSource)
const wallpaperAmbientTexture = textureLoader.load(wallpaperAmbientSource)

export default class Room
{
    constructor(_scene)
    {
        const roomGroup = new THREE.Group()
        roomGroup.visible = true
        _scene.add(roomGroup)

        const wallsMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            aoMap: wallpaperAmbientTexture,
            metalness: 0.4,
            roughness: 0.4,
            color: 0xD2C895,
        })
        const material = new THREE.MeshStandardMaterial({
            map: woodfloorColorTexture,
            aoMap: woodFloorAmbientTexture,
            metalness: 0.6,
            roughness: 0.5,
            side: THREE.DoubleSide
        })

        const darkMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            normalMap: wallpaperNormalTexture,
            color: 0x04072C,
        })

        const whiteMaterial = new THREE.MeshStandardMaterial({
            map: wallpaperColorTexture,
            color: 0xffffff,
        })

        //Text presenting the title of the museum
        const textGeometry = new THREE.TextGeometry(
            'M.I.I',
            {
                font: new THREE.Font(font),
                size: 1.7,
                height: 0.5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.08,
                bevelSize: 0.1,
                bevelOffset: - 0.08,
                bevelSegments: 10
            }
        )

        //light on the text

        const directionalLight = new THREE.DirectionalLight(0xe39d52, 0.25)
        directionalLight.position.x = 9
        directionalLight.position.y = 1
        directionalLight.position.z = -1
        directionalLight.rotation.y = Math.PI * 0.6


        _scene.add(directionalLight)

      

        /**
         * Walls creation for the room / floor and base for vitruvian man
         */

        const museumText = new THREE.Mesh(textGeometry, wallsMaterial)
        museumText.position.x = 7
        museumText.position.y = 0
        museumText.position.z = 2
        museumText.rotation.y = Math.PI * 0.6
        roomGroup.add(museumText)

        const wallFirstMesh = new THREE.Mesh(new THREE.BoxGeometry( 12.1, 3.95, 0.1 ), darkMaterial)
        wallFirstMesh.position.x = -5
        wallFirstMesh.position.y = 1.975
        wallFirstMesh.position.z = -6
        roomGroup.add(wallFirstMesh)

        const wallSecondMesh = new THREE.Mesh(new THREE.BoxGeometry( 18.1, 3.95, 0.1 ), darkMaterial)
        wallSecondMesh.position.x = -11
        wallSecondMesh.position.y = 1.975
        wallSecondMesh.position.z = 3
        wallSecondMesh.rotation.y = Math.PI * 0.5
        roomGroup.add(wallSecondMesh)

        const wallThirdMesh = new THREE.Mesh(new THREE.BoxGeometry( 4.9, 3.95, 0.1 ), darkMaterial)
        wallThirdMesh.position.x = -8.5
        wallThirdMesh.position.y = 1.975
        wallThirdMesh.position.z = 12
        roomGroup.add(wallThirdMesh)

        const wallFourthMesh = new THREE.Mesh(new THREE.BoxGeometry( 4.1, 3.95, 0.1 ), darkMaterial)
        wallFourthMesh.position.x = -6
        wallFourthMesh.position.y = 1.975
        wallFourthMesh.position.z = 10
        wallFourthMesh.rotation.y = Math.PI * -0.5
        roomGroup.add(wallFourthMesh)

        const wallFifthMesh = new THREE.Mesh(new THREE.BoxGeometry( 6, 3.95, 0.1 ), darkMaterial)
        wallFifthMesh.position.x = -3
        wallFifthMesh.position.y = 1.975
        wallFifthMesh.position.z = 8
        roomGroup.add(wallFifthMesh)

        const wallSixthMesh = new THREE.Mesh(new THREE.BoxGeometry( 2, 3.95, 0.1 ), darkMaterial)
        wallSixthMesh.position.x = 0
        wallSixthMesh.position.y = 1.975
        wallSixthMesh.position.z = 9.05
        wallSixthMesh.rotation.y = Math.PI * 0.5
        roomGroup.add(wallSixthMesh)

        const wallSeventhMesh = new THREE.Mesh(new THREE.BoxGeometry( 4.9, 3.95, 0.1 ), darkMaterial)
        wallSeventhMesh.position.x = 2.5
        wallSeventhMesh.position.y = 1.975
        wallSeventhMesh.position.z = 10
        roomGroup.add(wallSeventhMesh)

        const wallEighthMesh = new THREE.Mesh(new THREE.BoxGeometry( 13.1, 3.95, 0.1 ), darkMaterial)
        wallEighthMesh.position.x = 5
        wallEighthMesh.position.y = 1.975
        wallEighthMesh.position.z = 3.5
        wallEighthMesh.rotation.y = Math.PI * -0.5
        roomGroup.add(wallEighthMesh)

        const wallNinthMesh = new THREE.Mesh(new THREE.BoxGeometry( 4, 3.95, 0.1 ), darkMaterial)
        wallNinthMesh.position.x = 2.95
        wallNinthMesh.position.y = 1.975
        wallNinthMesh.position.z = -3
        roomGroup.add(wallNinthMesh)

        const wallTenthMesh = new THREE.Mesh(new THREE.BoxGeometry( 0.75, 2.75, 0.1 ), darkMaterial)
        wallTenthMesh.position.x = 1
        wallTenthMesh.position.y = 1.375
        wallTenthMesh.position.z = -3.375
        wallTenthMesh.rotation.y = Math.PI * -0.5
        roomGroup.add(wallTenthMesh)

        const wallEleventhMesh = new THREE.Mesh(new THREE.BoxGeometry( 3, 1.20, 0.1 ), darkMaterial)
        wallEleventhMesh.position.x = 1
        wallEleventhMesh.position.y = 3.35
        wallEleventhMesh.position.z = -4.5
        wallEleventhMesh.rotation.y = Math.PI * -0.5
        roomGroup.add(wallEleventhMesh)

        const wallTwelfthMesh = new THREE.Mesh(new THREE.BoxGeometry( 0.75, 2.75, 0.1 ), darkMaterial)
        wallTwelfthMesh.position.x = 1
        wallTwelfthMesh.position.y = 1.375
        wallTwelfthMesh.position.z = -5.625
        wallTwelfthMesh.rotation.y = Math.PI * -0.5
        roomGroup.add(wallTwelfthMesh)

        const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(30, 25, 1, 1), material)
        floor.position.y = 0
        floor.rotation.x -= Math.PI * 0.5
        roomGroup.add(floor)

        const ceilingOne = new THREE.Mesh(new THREE.BoxGeometry( 16.1, 11.1, 0.1 ), darkMaterial)
        ceilingOne.position.y = 4
        ceilingOne.position.x = -3
        ceilingOne.position.z = 2.5
        ceilingOne.rotation.x -= Math.PI * 0.5
        roomGroup.add(ceilingOne)

        const ceilingTwo = new THREE.Mesh(new THREE.BoxGeometry( 12.1, 4.1, 0.1 ), darkMaterial)
        ceilingTwo.position.y = 4
        ceilingTwo.position.x = -5
        ceilingTwo.position.z = -4
        ceilingTwo.rotation.x -= Math.PI * 0.5
        roomGroup.add(ceilingTwo)
        

    }
}