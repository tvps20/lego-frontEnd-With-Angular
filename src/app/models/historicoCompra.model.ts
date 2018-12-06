import { Set } from './set.model';

export class HistoricoCompra {
    public id: number;
    public set: Set;
    public preco: number;
    public frete: number;
    public localCompra: string;
    public variacaoCambio: string;
}