# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Lo que te permite hacer `interface` que `type` no, es que se pueden declarar interfaces dos veces y se juntan en una sola, en cambio con type no se puede y daria error.

## ¿Qué permite hacer `type` que `interface` no?

Lo que te permite hacer `type` que `interface`  no, es que type puede representar cualquier tipo de dato ya sea unir string|number, tuplas,etc , e interface solo sirve para definir la estructura de obejtos.

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

Sí, ambas se pueden extender. con `ìnterface` se utiliza extends y con `type` se utiliza (&).

Ejemplos:
INTERFACE:
Alumno extends Persona { legajo: number;}
TYPE:
Alumno = Persona & { legajo: number; };

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

Elegiria `interface` porque Alumno es un objeto con forma fija y no necesita uniones ni tuplas por ejemplo, que ahi se deberia utilizar `type`.
