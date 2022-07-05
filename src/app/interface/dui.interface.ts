export interface DatosPartidaResponse {
    dui:         string;
    noSoli:      string;
    nom1:        string;
    nom2:        string;
    ape1:        string;
    ape2:        string;
    sexo:        string;
    nomMadre:    string;
    nomPadre:    string;
    status:      string;
    marginacion: string;
    rollo:       string;
    rolloSec:    null;
    anio:        string;
    libro:       string;
    folio:       string;
    partida:     string;
    deptoLibro:  string;
    muniLibro:   string;
    fecNac:      string;
    deptoNac:    string;
    muniNac:     string;
    cuadro:      string;
}


export interface DatosDuiResponse {
    dui:                string;
    numeroSolicitud:    string;
    nom1:               string;
    nom2:               string;
    ape1:               string;
    ape2:               string;
    sexo:               string;
    estadoFami:         string;
    conyugue:           null;
    nombMadr:           string;
    nombPadr:           string;
    fechNaci:           string;
    nombPaisNaci:       string;
    nombDeptNaci:       string;
    nombMuniNaci:       string;
    estadoCiudadano:    string;
    profesion:          string;
    peso:               string;
    estatura:           string;
    conocidoPor:        null;
    residencia:         string;
    calle:              string;
    casa:               string;
    zip:                string;
    nombPaisResidencia: string;
    nombDeptResidencia: string;
    nombMuniResidencia: string;
    canton:             null;
    caserio:            null;
}

export interface DatosTramiteResponse {
    tipoTramite: string;
    status:      string;
    partMarc:    string;
    folio:       string;
    fechaReg:    string;
    fechaEmi:    string;
    fechaEntr:   string;
    fechaVenc:   string;
    centroServi: string;
}