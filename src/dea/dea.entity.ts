//dea.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'TBL_DEA'})
export class Dea{

    @PrimaryGeneratedColumn()
    DEA_ID:number;

    @Column()
    DEA_NOMBRECOMPLETO:string;

    @Column()
    DEA_DOCIDENTIFICACION:string;

    @Column('int')
    DEA_CANTIDAD:number;

    @Column()
    DEA_NOMBREUBICACION:string;

    @Column()
    DEA_DIRECCIONUBICACION:string;

    @Column('int')
    DEA_CODIGOPOSTAL:string;

    @Column()
    DEA_CIUDADMUNICIPIO:string;

    @Column()
    DEA_DEPARTAMENTO:string;

    @Column()
    DEA_TIPOINSTALACION:string;

    @Column()
    DEA_TIPODECLARACION:string;

    @Column()
    DEA_TIPOESPACIO:string;

    @Column()
    DEA_NUMSERIE:string;

    @Column()
    DEA_MODELO:string;

    @Column()
    DEA_MARCA:string;

    @Column()
    DEA_IMPORTADORDISTRIBUIDOR:string;

    @Column()
    DEA_DESCLUGARUBICACION:string;

    @Column()
    DEA_GPS:string;

    @Column()
    DEA_FECHAREGISTRO:Date;
    
}