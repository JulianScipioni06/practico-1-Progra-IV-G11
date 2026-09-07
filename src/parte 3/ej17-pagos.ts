/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        // TODO: informar el pago por consola (console.log), mencionando el
        // monto. Cada método de pago debe loguear un mensaje distinto que
        // lo identifique (por ejemplo, mencionando "tarjeta").
        console.log(`Pago de ${monto} realizado con tarjeta de crédito.`);
        return;
        throw new Error("Implementar");
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        // TODO: idem, mencionando "transferencia"
        console.log(`Pago de ${monto} realizado mediante transferencia.`);
        return;
        throw new Error("Implementar");
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        // TODO: idem, mencionando "mercado pago"
        console.log(`Pago de ${monto} realizado con Mercado Pago.`);
        return;
        throw new Error("Implementar");
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        // TODO: idem, mencionando "efectivo"
        console.log(`Pago de ${monto} realizado en efectivo.`);
        return;
        throw new Error("Implementar");
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    // TODO: delegar el pago al método recibido.
    metodo.pagar(monto);
    return;
    throw new Error("Implementar");
}
