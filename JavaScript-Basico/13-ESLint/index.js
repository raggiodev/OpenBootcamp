// Ejercicio 13 - Curso de JavaScript Básico - OpenBootcamp | @JoeTheorium - Raggio Fernando Andrés
let nombre = "Joe"
let apellido = "Raggio"

let estudiante = `${nombre} ${apellido}`

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let estudianteLength = estudiante.length

let inicialNombre = nombre[0]
let finalApellido = apellido[apellido.length - 1]

let estudianteSinEspacios = estudiante.replace(/ /g, "")

let nombreEnEstudiante = estudiante.includes(nombre)

// npm run lint
/*
1:19  error  Extra semicolon                                             semi
2:16  error  Strings must use doublequote                                quotes
2:24  error  Extra semicolon                                             semi
4:41  error  Extra semicolon                                             semi
6:5   error  'estudianteMayus' is assigned a value but never used        no-unused-vars
6:47  error  Extra semicolon                                             semi
7:5   error  'estudianteMinus' is assigned a value but never used        no-unused-vars
7:47  error  Extra semicolon                                             semi
9:5   error  'estudianteLength' is assigned a value but never used       no-unused-vars
9:41  error  Extra semicolon                                             semi
11:5   error  'inicialNombre' is assigned a value but never used          no-unused-vars
11:30  error  Extra semicolon                                             semi
12:5   error  'finalApellido' is assigned a value but never used          no-unused-vars
12:50  error  Extra semicolon                                             semi
14:5   error  'estudianteSinEspacios' is assigned a value but never used  no-unused-vars
14:57  error  Extra semicolon                                             semi
16:5   error  'nombreEnEstudiante' is assigned a value but never used     no-unused-vars
16:53  error  Extra semicolon                                             semi

✖ 18 problems (18 errors, 0 warnings)
11 errors and 0 warnings potentially fixable with the `--fix` option.
*/

// npm run lint-fix
/*
6:5  error  'estudianteMayus' is assigned a value but never used        no-unused-vars
7:5  error  'estudianteMinus' is assigned a value but never used        no-unused-vars
9:5  error  'estudianteLength' is assigned a value but never used       no-unused-vars
11:5  error  'inicialNombre' is assigned a value but never used          no-unused-vars
12:5  error  'finalApellido' is assigned a value but never used          no-unused-vars
14:5  error  'estudianteSinEspacios' is assigned a value but never used  no-unused-vars
16:5  error  'nombreEnEstudiante' is assigned a value but never used     no-unused-vars

✖ 7 problems (7 errors, 0 warnings)
*/

// "no-unused-vars": "off"
/*
> 13---ejercicios---unit-3@1.0.0 lint
> eslint .

NO ERRORS.
*/
