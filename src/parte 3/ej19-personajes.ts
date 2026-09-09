/**
 * EJERCICIO 19 - Sistema de personajes
 * ---------------------------------------------------------------------------
 * Cada personaje ataca distinto:
 *   - Guerrero: ataque físico -> hace daño = this.ataque
 *   - Mago:     ataque mágico -> hace daño = round(this.ataque * 1.5)
 *   - Arquero:  ataque a distancia -> hace daño = round(this.ataque * 0.8)
 *
 * La vida de quien recibe el ataque nunca debe bajar de 0.
 */
export abstract class Personaje {
    constructor(
        public nombre: string,
        public vida: number,
        public ataque: number
    ) {}

    abstract atacar(objetivo: Personaje): void;
}

export class Guerrero extends Personaje {
    atacar(objetivo: Personaje): void {
        // TODO: aplicar daño = this.ataque a objetivo.vida (sin bajar de 0)
        let danio = this.ataque

        if (objetivo.vida - danio < 0) {
            objetivo.vida = 0
        } else {
            objetivo.vida -= this.ataque
        }
    }
}

export class Mago extends Personaje {
    atacar(objetivo: Personaje): void {
        // TODO: aplicar daño = Math.round(this.ataque * 1.5)
        const danio = Math.round(this.ataque * 1.5)

        objetivo.vida = Math.max(0, objetivo.vida - danio);
    }
}

export class Arquero extends Personaje {
    atacar(objetivo: Personaje): void {
        // TODO: aplicar daño = Math.round(this.ataque * 0.8)
        const danio = Math.round(this.ataque * 0.8)

        objetivo.vida = Math.max(0, objetivo.vida - danio);
    }
}
