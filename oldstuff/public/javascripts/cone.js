
// VTK renderWindow/renderer
var renderWindow = vtk.Rendering.Core.vtkRenderWindow.newInstance();
var renderer     = vtk.Rendering.Core.vtkRenderer.newInstance();
      renderWindow.addRenderer(renderer);


// WebGL/OpenGL impl
var openGLRenderWindow = vtk.Rendering.OpenGL.vtkRenderWindow.newInstance();
openGLRenderWindow.setContainer(container);
openGLRenderWindow.setSize(500, 500);
renderWindow.addView(openGLRenderWindow);

// Interactor
var interactor = vtk.Rendering.Core.vtkRenderWindowInteractor.newInstance();
interactor.setView(openGLRenderWindow);
interactor.initialize();
interactor.bindEvents(container);

// Interactor style
var trackball = vtk.Interaction.Style.vtkInteractorStyleTrackballCamera.newInstance();
interactor.setInteractorStyle(trackball);

// Pipeline
var cone   = vtk.Filters.Sources.vtkConeSource.newInstance();
var actor  = vtk.Rendering.Core.vtkActor.newInstance();
var mapper = vtk.Rendering.Core.vtkMapper.newInstance();

actor.setMapper(mapper);
mapper.setInputConnection(cone.getOutputPort());
renderer.addActor(actor);

// Render
renderer.resetCamera();
renderWindow.render();
