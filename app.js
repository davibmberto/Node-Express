// local dependecy = means it will only be used in this particular project
// npm i <packageName>

// global dependency = means it can be used in any project
// npm install -g <packageName>

// package.json - manifest file (metadata file about) (stores important info about project/package)
// --- CREATING A package.json ---
// manual aproach (manually creat package.json in the root, creat properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// package.json stores data about the project and manages dependencies and their versions
// some packages use more than one dependencie
// all dependencies will be in the node module folder
// when it comes to sharing code, you dont share the modules together with the code
// the size would be to big to share
// so we share the package.json, with all the metadata of the project and the packages or dependencies it will need


//ex:
// bootstrap package has 3 dependencies: bootstrap, jquery, popper.js

//OBS: these packages are use the same way as built in modules, using the require() method
