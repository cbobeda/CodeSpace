from ursina import *
from ursinanetworking import *
from ursina.prefabs.first_person_controller import FirstPersonController
class Voxel(Button):
    def __init__(self, position = (0,0,0)):
        super().__init__(
            parent = scene,
            position = position,
            model = 'cube',
            origin_y = 0.5,
            texture = 'white_cube',
            color = color.color(0,0,random.uniform(0.9,1)),
            highlight_color = color.lime)
    def input(self, key):
        if self.hovered:
            if key == 'right mouse down':
                voxel = Voxel(position= self.position + mouse.normal)
            if key == 'left mouse down':
                destroy(self)
class Sky(Entity):
	def __init__(self):
		super().__init__(
			parent = scene,
			model = 'sphere',
			texture='sky_default',
			color = color.white,
			scale=300,
			double_sided=True
		)
app = Ursina()
def update ():
    if held_keys ['escape']:
        quit()

for z in range (20):
    for x in range (20):
        voxel = Voxel(position=(x,0,z))
sky = Sky()
player = FirstPersonController()
Client = UrsinaNetworkingClient("localhost", 25565)
@Client.event
def HelloFromServer(Content):
    print(f"Server says : {Content}")

while True:
    Client.process_net_events()
app.run()