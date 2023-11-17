function $(p_id)
{
    return document.getElementById(p_id);
}



/*
    Laboratorio III - Segundo Parcial
    Div. 3°C
    Juan Pablo Dongo Huaman
*/

// #region Entidades

class Persona
{
    constructor(p_id, p_nombre, p_apellido, p_edad)
    {
        this.id = p_id; // Int {no nulo}
        this.nombre = p_nombre; // String {no nulo}
        this.apellido = p_apellido; // String {no nulo}
        this.edad = p_edad; // Int {Mayor a 15}
    }
    
    toString()
    {
        return JSON.stringify(this);
    }

    static es_futbolista(p_elemento)
    {
        return (p_elemento instanceof Futbolista) ||
                (p_elemento && p_elemento.equipo) ||
                (p_elemento && p_elemento.titulo == "--") ||
                (p_elemento && p_elemento.cantidadGoles > -1);
    }

    static es_profesional(p_elemento)
    {
        return (p_elemento instanceof Profesional) ||
                (p_elemento && p_elemento.titulo) ||
                (p_elemento && p_elemento.equipo == "--") ||
                (p_elemento && p_elemento.añoGraduacion > 1950);
    }
}
class Futbolista extends Persona
{
    constructor(p_id, p_nombre, p_apellido, p_edad, p_equipo, p_posicion, p_cantidad_goles)
    {
        super(p_id, p_nombre, p_apellido, p_edad);
        this.equipo = p_equipo; // String {no nulo}
        this.posicion = p_posicion; // String {no nulo}
        this.cantidadGoles = p_cantidad_goles; // Int {mayor a -1}
    }

    toString()
    {
        return JSON.stringify(this);
    }
}
class Profesional extends Persona
{
    constructor(p_id, p_nombre, p_apellido, p_edad, p_titulo, p_facultad, p_año_graduacion)
    {
        super(p_id, p_nombre, p_apellido, p_edad);
        this.titulo = p_titulo; // String {no nulo}
        this.facultad = p_facultad; // String {no nulo}
        this.añoGraduacion = p_año_graduacion; // Int {mayor a 1950}
    }

    toString()
    {
        return JSON.stringify(this);
    }
}

// #endregion Entidades




/*
    Laboratorio III - Segundo Parcial
    Div. 3°C
    Juan Pablo Dongo Huaman
*/

// #region Clases de Utilidad

class Input
{
    static ID_TXT_ID = "txtId";
    static ID_TXT_NOMBRE = "txtNombre";
    static ID_TXT_APELLIDO = "txtApellido";
    static ID_TXT_EDAD = "txtEdad";

    static ID_TXT_EQUIPO = "txtEquipo";
    static ID_TXT_POSICION = "txtPosicion";
    static ID_TXT_CANTIDAD_GOLES = "txtCantidadGoles";

    static ID_TXT_TITULO = "txtTitulo";
    static ID_TXT_FACULTAD = "txtFacultad";
    static ID_TXT_AÑO_GRADUACION = "txtAñoGraduacion";

    static NOMBRE_MSJ_ERROR = "Nombre no valido, debe ser solo letras con 4 caracteres como minimo";
    static APELLIDO_MSJ_ERROR = "Apellido no valido, debe ser solo letras con 4 caracteres como minimo";
    static EDAD_MSJ_ERROR = "Edad no valida, debe mayor a 15";
    static TIPO_MSJ_ERROR = "Tipo no valido, hay que seleccionar uno";

    static EQUIPO_MSJ_ERROR = "Equipo no valido, debe ser solo letras con 2 caracteres como minimo";
    static POSICION_MSJ_ERROR = "Posicion no valida, debe ser solo letras con 3 caracteres como minimo";
    static CANTIDAD_GOLES_MSJ_ERROR = "Cantidad de goles no valido, debe ser mayor a -1";

    static TITULO_MSJ_ERROR = "Titulo no valido, debe ser solo letras con 4 caracteres como minimo";
    static FACULTAD_MSJ_ERROR = "Facultad no valida, debe ser solo letras con 2 caracteres como minimo";
    static ANIO_GRADUACION_MSJ_ERROR = "Año de graduacion no valido, debe ser mayor a 1950";

    static es_numerico(p_cadena, p_longitud_min)
    {
        let expresion = /^(\+|-)?\d+(\.\d+)?$/;

        if(expresion.test(p_cadena))
        {
            p_cadena = parseFloat(p_cadena);
            if(p_longitud_min <= p_cadena)
            {
                return p_cadena;
            }
        }

        return null;
    }
    static es_solo_letras(p_cadena, p_longitud_min)
    {
        let expresion = /^[a-zA-Z\s]+$/;

        if(expresion.test(p_cadena))
        {
            if(p_cadena.length >= p_longitud_min)
            {
                return p_cadena;
            }
            
        }

        return null;
    }

    static get_entidad()
    {
        let id = $(Input.ID_TXT_ID).value;
        let nombre = $(Input.ID_TXT_NOMBRE).value;
        let apellido = $(Input.ID_TXT_APELLIDO).value;
        let edad = $(Input.ID_TXT_EDAD).value;

        let equipo = $(Input.ID_TXT_EQUIPO).value;
        let posicion = $(Input.ID_TXT_POSICION).value;
        let cantidadGoles = $(Input.ID_TXT_CANTIDAD_GOLES).value;

        let titulo = $(Input.ID_TXT_TITULO).value;
        let facultad = $(Input.ID_TXT_FACULTAD).value;
        let añoGraduacion = $(Input.ID_TXT_AÑO_GRADUACION).value;

        switch($("comboxTipo").value)
        {
            case "futbolista":

                return new Futbolista(  parseInt(id),
                                                nombre.trim(),
                                                apellido.trim(),
                                        parseInt(edad),
                                                equipo.trim(),
                                                posicion.trim(),
                                        parseInt(cantidadGoles));
            
            break;

            case "profesional":

                return new Profesional(   parseInt(id),
                                                    nombre.trim(),
                                                    apellido.trim(),
                                            parseInt(edad),
                                                    titulo.trim(),
                                                    facultad.trim(),
                                            parseInt(añoGraduacion));
            
            break;
        }

        return null;
    }
    static validar_entidad()
    {
        let nombre = $(Input.ID_TXT_NOMBRE).value;
        let apellido = $(Input.ID_TXT_APELLIDO).value;
        let edad = $(Input.ID_TXT_EDAD).value;

        let equipo = $(Input.ID_TXT_EQUIPO).value;
        let posicion = $(Input.ID_TXT_POSICION).value;
        let cantidadGoles = $(Input.ID_TXT_CANTIDAD_GOLES).value;

        let titulo = $(Input.ID_TXT_TITULO).value;
        let facultad = $(Input.ID_TXT_FACULTAD).value;
        let añoGraduacion = $(Input.ID_TXT_AÑO_GRADUACION).value;

        if(Input.es_solo_letras(nombre, 4) === null)
        {
            alert(Input.NOMBRE_MSJ_ERROR);
            return false;
        }
        if(Input.es_solo_letras(apellido, 4) === null)
        {
            alert(Input.APELLIDO_MSJ_ERROR);
            return false;
        }
        if(Input.es_numerico(edad, 16) === null)
        {
            alert(Input.EDAD_MSJ_ERROR);
            return false;
        }

        switch($("comboxTipo").value)
        {
            case "futbolista":

                if(Input.es_solo_letras(equipo, 2) === null)
                {
                    alert(Input.EQUIPO_MSJ_ERROR);
                    return false;
                }
                if(Input.es_solo_letras(posicion, 3) === null)
                {
                    alert(Input.POSICION_MSJ_ERROR);
                    return false;
                }
                if(Input.es_numerico(cantidadGoles, -1) === null)
                {
                    alert(Input.CANTIDAD_GOLES_MSJ_ERROR);
                    return false;
                }

            break;

            case "profesional":

                if(Input.es_solo_letras(titulo, 4) === null)
                {
                    alert(Input.TITULO_MSJ_ERROR);
                    return false;
                }
                if(Input.es_solo_letras(facultad, 2) === null)
                {
                    alert(Input.FACULTAD_MSJ_ERROR);
                    return false;
                }
                if(Input.es_numerico(añoGraduacion, 1950) === null)
                {
                    alert(Input.ANIO_GRADUACION_MSJ_ERROR);
                    return false;
                }

            break;

            default:

                alert(Input.TIPO_MSJ_ERROR);

            break;
        }
        
        return true;
    }
    static limpiar()
    {
        $(Input.ID_TXT_ID).value = "";
        $(Input.ID_TXT_NOMBRE).value = "";
        $(Input.ID_TXT_APELLIDO).value = "";
        $(Input.ID_TXT_EDAD).value = "";

        $("comboxTipo").value = "default";
        $("comboxTipo").dispatchEvent(new Event("change"));

        $(Input.ID_TXT_EQUIPO).value = "";
        $(Input.ID_TXT_POSICION).value = "";
        $(Input.ID_TXT_CANTIDAD_GOLES).value = "";

        $(Input.ID_TXT_TITULO).value = "";
        $(Input.ID_TXT_FACULTAD).value = "";
        $(Input.ID_TXT_AÑO_GRADUACION).value = "";
    }
}
class Conversor
{
    static array_json_a_array_entidades(p_array)
    {
        let ret = [];

        if(p_array)
        {
            for(let i=0; i<p_array.length; i++)
            {
                if(Persona.es_futbolista(p_array[i]))
                {
                    ret.push(new Futbolista(p_array[i].id,
                                            p_array[i].nombre,
                                            p_array[i].apellido,
                                            p_array[i].edad,
                                            p_array[i].equipo,
                                            p_array[i].posicion,
                                            p_array[i].cantidadGoles));
                }
                else if(Persona.es_profesional(p_array[i]))
                {
                    ret.push(new Profesional(p_array[i].id,
                                                p_array[i].nombre,
                                                p_array[i].apellido,
                                                p_array[i].edad,
                                                p_array[i].titulo,
                                                p_array[i].facultad,
                                                p_array[i].añoGraduacion));
                }
            }
        }

        return ret;
    }
}
class Tabla
{
    // #region Utilidades

    static crear_fila()
    {
        return document.createElement("tr");
    }
    static crear_celda_de_texto(p_texto)
    {
        let celda = document.createElement("td");
        celda.appendChild(document.createTextNode(p_texto));
        return celda;
    }
    static crear_celda_de_elemento_doom(p_elemento)
    {
        let celda = document.createElement("td");
        celda.appendChild(p_elemento);
        return celda;
    }
    static get_filas()
    {
        return $("tabla").getElementsByTagName("tr");
    }
    static convertir_celdas_a_entidad(p_celdas)
    {
        if(p_celdas)
        {
            if(p_celdas[4].textContent != "--")
            {
                return new Futbolista(p_celdas[0].textContent, // ID
                                        p_celdas[1].textContent, // NOMBRE
                                        p_celdas[2].textContent, // APELLIDO
                                        p_celdas[3].textContent, // EDAD
                                        p_celdas[4].textContent, // EQUIPO
                                        p_celdas[5].textContent, // POSICION
                                        p_celdas[6].textContent); // CANTIDAD GOLES
            }
            else if(p_celdas[7].textContent != "--")
            {
                return new Profesional(p_celdas[0].textContent, // ID
                                        p_celdas[1].textContent, // NOMBRE
                                        p_celdas[2].textContent, // APELLIDO
                                        p_celdas[3].textContent, // EDAD
                                        p_celdas[7].textContent, // TITULO
                                        p_celdas[8].textContent, // FACULTAD
                                        p_celdas[9].textContent); // AÑO GRADUACION
            }
        }

        return null;
    }
    static crear_boton_con_evento(p_id, p_texto, p_funcion)
    {
        let input = document.createElement("input");
        input.setAttribute("id", p_id);
        input.className = "eButtonRegistro";
        input.type = "button";
        input.value = p_texto;
        input.style.width = "100%";
        input.style.margin = "0";
        input.addEventListener("click", p_funcion);
        input.disabled = true;
        return input;
    }
    
    // #endregion Utilidades

    // #region Funcionalidades

    static get_array()
    {
        let filas = Tabla.get_filas();
        let ret = [];

        for(let i=1; i<filas.length; i++)
        {
            let celdas = filas[i].getElementsByTagName("td");
            ret.push(Tabla.convertir_celdas_a_entidad(celdas));
        }

        return ret;
    }
    static eliminar_registros()
    {
        let registros = Tabla.get_array();
        if(registros.length > 0)
        {
            for(let i=registros.length-1; i>=0; i--)
            {
                let fila = $(registros[i].id);
                fila.parentNode.removeChild(fila);
            }
        }
    }
    static set_array(p_array)
    {
        if(p_array)
        {
            Tabla.eliminar_registros();
            p_array = Conversor.array_json_a_array_entidades(p_array);
            for(let i=0; i<p_array.length; i++)
            {
                Tabla.alta(p_array[i]);
            }
        }
    }
    static get_entidad(p_id)
    {
        let fila = $(p_id);
        if(fila)
        {
            let celdas = fila.getElementsByTagName("td");
            return Tabla.convertir_celdas_a_entidad(celdas);
        }
    }
    static alta(p_elemento)
    {
        if(p_elemento)
        {
            let tabla = $("tabla");
            let fila = Tabla.crear_fila();
            
            fila.setAttribute("id", p_elemento.id);
    
            if(Persona.es_futbolista(p_elemento))
            {
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.id));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.nombre));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.apellido));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.edad));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.equipo));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.posicion));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.cantidadGoles));
                fila.appendChild(Tabla.crear_celda_de_texto("--"));
                fila.appendChild(Tabla.crear_celda_de_texto("--"));
                fila.appendChild(Tabla.crear_celda_de_texto("--"));
                fila.appendChild(Tabla.crear_celda_de_elemento_doom(Tabla.crear_boton_con_evento(`btnBaja${p_elemento.id}`, "Eliminar", Evento.modo_baja)));
                fila.appendChild(Tabla.crear_celda_de_elemento_doom(Tabla.crear_boton_con_evento(`btnModificar${p_elemento.id}`, "Modificar", Evento.modo_modificar)));
            }
            else if(Persona.es_profesional(p_elemento))
            {
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.id));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.nombre));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.apellido));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.edad));
                fila.appendChild(Tabla.crear_celda_de_texto("--"));
                fila.appendChild(Tabla.crear_celda_de_texto("--"));
                fila.appendChild(Tabla.crear_celda_de_texto("--"));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.titulo));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.facultad));
                fila.appendChild(Tabla.crear_celda_de_texto(p_elemento.añoGraduacion));
                fila.appendChild(Tabla.crear_celda_de_elemento_doom(Tabla.crear_boton_con_evento(`btnBaja${p_elemento.id}`, "Eliminar", Evento.modo_baja)));
                fila.appendChild(Tabla.crear_celda_de_elemento_doom(Tabla.crear_boton_con_evento(`btnModificar${p_elemento.id}`, "Modificar", Evento.modo_modificar)));
            }
    
            tabla.appendChild(fila);
        }
    }
    static baja(p_elemento)
    {
        let rta = prompt("Esta seguro ? s/n | si/no").toLowerCase();
        if(rta == "s" ||  rta == "si")
        {
            let fila = $(p_elemento.id);
            if(fila)
            {
                fila.parentNode.removeChild(fila);
                return true;
            }
        }

        return false;
    }
    static modificar(p_elemento)
    {
        if(p_elemento)
        {
            let fila = $(p_elemento.id);
            let celdas = fila.getElementsByTagName("td");
    
            celdas[0].textContent = p_elemento.id;
            celdas[1].textContent = p_elemento.nombre;
            celdas[2].textContent = p_elemento.apellido;
            celdas[3].textContent = p_elemento.edad;
    
            if(Persona.es_futbolista(p_elemento))
            {
                celdas[4].textContent = p_elemento.equipo;
                celdas[5].textContent = p_elemento.posicion;
                celdas[6].textContent = p_elemento.cantidadGoles;
                celdas[7].textContent = "--";
                celdas[8].textContent = "--";
                celdas[9].textContent = "--";
            }
            else if(Persona.es_profesional(p_elemento))
            {
                celdas[4].textContent = "--";
                celdas[5].textContent = "--";
                celdas[6].textContent = "--";
                celdas[7].textContent = p_elemento.titulo;
                celdas[8].textContent = p_elemento.facultad;
                celdas[9].textContent = p_elemento.añoGraduacion;
            }
        }
    }

    // #endregion Funcionalidades
}
class Spinner
    {
        static mostrar(p_id)
        {
            $(p_id).style.display = "";
            $(p_id).style.animation = "spin 1s linear infinite";
        }
        static ocultar(p_id)
        {
            $(p_id).style.display = "none";
            $(p_id).style.animation = "spin 0s linear infinite";
        }
}
class Pantalla
    {
        static bloquear()// Afecta Cambio L
        {
            let registros = Tabla.get_array();
            for(let i=0; i<registros.length; i++)
            {
                $(`btnBaja${registros[i].id}`).disabled = true;
                $(`btnModificar${registros[i].id}`).disabled = true;
            }

            $("btnAgregar").disabled = true;

            $(Input.ID_TXT_ID).disabled = true;
            $(Input.ID_TXT_NOMBRE).disabled = true;
            $(Input.ID_TXT_APELLIDO).disabled = true;
            $(Input.ID_TXT_EDAD).disabled = true;

            $("comboxTipo").disabled = true;

            $(Input.ID_TXT_EQUIPO).disabled = true;
            $(Input.ID_TXT_POSICION).disabled = true;
            $(Input.ID_TXT_CANTIDAD_GOLES).disabled = true;

            $(Input.ID_TXT_TITULO).disabled = true;
            $(Input.ID_TXT_FACULTAD).disabled = true;
            $(Input.ID_TXT_AÑO_GRADUACION).disabled = true;

            $("btnAceptar").disabled = true;
            $("btnCancelar").disabled = true;

            console.log("Pantalla bloqueada");
        }
        static desbloquear()// Afecta Cambio L
        {
            let registros = Tabla.get_array();
            for(let i=0; i<registros.length; i++)
            {
                $(`btnBaja${registros[i].id}`).disabled = false;
                $(`btnModificar${registros[i].id}`).disabled = false;
            }

            $("btnAgregar").disabled = false;

            $(Input.ID_TXT_ID).disabled = false;
            $(Input.ID_TXT_NOMBRE).disabled = false;
            $(Input.ID_TXT_APELLIDO).disabled = false;
            $(Input.ID_TXT_EDAD).disabled = false;

            $("comboxTipo").disabled = false;

            $(Input.ID_TXT_EQUIPO).disabled = false;
            $(Input.ID_TXT_POSICION).disabled = false;
            $(Input.ID_TXT_CANTIDAD_GOLES).disabled = false;

            $(Input.ID_TXT_TITULO).disabled = false;
            $(Input.ID_TXT_FACULTAD).disabled = false;
            $(Input.ID_TXT_AÑO_GRADUACION).disabled = false;

            $("btnAceptar").disabled = false;
            $("btnCancelar").disabled = false;

            console.log("Pantalla desbloqueada");
        }
}
class Res
    {
        static mostrar_ok(p_id, p_msj)// NO Afecta Cambio
        {
            $(p_id).style.display = "";
            $(p_id).style.color = "green";
            $(p_id).textContent = p_msj;
        }
        static mostrar_error(p_id, p_msj)// NO Afecta Cambio
        {
            $(p_id).style.display = "";
            $(p_id).style.color = "red";
            $(p_id).textContent = p_msj;
        }
        static ocultar(p_id)// NO Afecta Cambio
        {
            $(p_id).style.display = "none";
        }
}   
class Form
    {
        static operacion;

        static set_entidad(p_id_entidad)// Afecta Cambio L
        {
            let entidad = Tabla.get_entidad(p_id_entidad);
            if(entidad)
            {
                $(Input.ID_TXT_ID).value = entidad.id;
                $(Input.ID_TXT_NOMBRE).value = entidad.nombre;
                $(Input.ID_TXT_APELLIDO).value = entidad.apellido;
                $(Input.ID_TXT_EDAD).value = entidad.edad;
                if(Persona.es_futbolista(entidad))
                {
                    $("comboxTipo").value = "futbolista";
                    $(Input.ID_TXT_EQUIPO).value = entidad.equipo;
                    $(Input.ID_TXT_POSICION).value = entidad.posicion;
                    $(Input.ID_TXT_CANTIDAD_GOLES).value = entidad.cantidadGoles;
                }
                else if(Persona.es_profesional(entidad))
                {
                    $("comboxTipo").value = "profesional";
                    $(Input.ID_TXT_TITULO).value = entidad.titulo;
                    $(Input.ID_TXT_FACULTAD).value = entidad.facultad;
                    $(Input.ID_TXT_AÑO_GRADUACION).value = entidad.añoGraduacion;
                }
    
                $("comboxTipo").dispatchEvent(new Event("change"));
            }
        }
        static modo_alta()// Afecta Cambio L
        {
            Form.operacion = "alta";

            $("formAbmTitulo").textContent = "Formulario Alta";

            $("inputId").style.display = "none";

            $(Input.ID_TXT_ID).disabled = true;
            $(Input.ID_TXT_NOMBRE).disabled = false;
            $(Input.ID_TXT_APELLIDO).disabled = false;
            $(Input.ID_TXT_EDAD).disabled = false;

            $("comboxTipo").disabled = false;

            $(Input.ID_TXT_EQUIPO).disabled = false;
            $(Input.ID_TXT_POSICION).disabled = false;
            $(Input.ID_TXT_CANTIDAD_GOLES).disabled = false;

            $(Input.ID_TXT_TITULO).disabled = false;
            $(Input.ID_TXT_FACULTAD).disabled = false;
            $(Input.ID_TXT_AÑO_GRADUACION).disabled = false;
        }
        static modo_baja()// Afecta Cambio L
        {
            Form.operacion = "baja";

            $("formAbmTitulo").textContent = "Formulario Eliminar";

            $("inputId").style.display = "";

            $(Input.ID_TXT_ID).disabled = true;
            $(Input.ID_TXT_NOMBRE).disabled = true;
            $(Input.ID_TXT_APELLIDO).disabled = true;
            $(Input.ID_TXT_EDAD).disabled = true;

            $("comboxTipo").disabled = true;

            $(Input.ID_TXT_EQUIPO).disabled = true;
            $(Input.ID_TXT_POSICION).disabled = true;
            $(Input.ID_TXT_CANTIDAD_GOLES).disabled = true;

            $(Input.ID_TXT_TITULO).disabled = true;
            $(Input.ID_TXT_FACULTAD).disabled = true;
            $(Input.ID_TXT_AÑO_GRADUACION).disabled = true;
        }
        static modo_modificar()// Afecta Cambio L
        {
            Form.operacion = "modificar";

            $("formAbmTitulo").textContent = "Formulario Modificar";

            $("inputId").style.display = "";

            $(Input.ID_TXT_ID).disabled = true;
            $(Input.ID_TXT_NOMBRE).disabled = false;
            $(Input.ID_TXT_APELLIDO).disabled = false;
            $(Input.ID_TXT_EDAD).disabled = false;

            $("comboxTipo").disabled = true;

            $(Input.ID_TXT_EQUIPO).disabled = false;
            $(Input.ID_TXT_POSICION).disabled = false;
            $(Input.ID_TXT_CANTIDAD_GOLES).disabled = false;

            $(Input.ID_TXT_EQUIPO).disabled = false;
            $(Input.ID_TXT_POSICION).disabled = false;
            $(Input.ID_TXT_CANTIDAD_GOLES).disabled = false;
        }
        static mostrar_abm()// NO Afecta Cambio
        {
            $("formAbm").style.display = "flex";
            $("formLista").style.display = "none";
        }
        static mostrar_lista()// NO Afecta Cambio
        {
            $("formAbm").style.display = "none";
            $("formLista").style.display = "flex";
        }
}

// #endregion Clases de Utilidad




/*
    Laboratorio III - Segundo Parcial
    Div. 3°C
    Juan Pablo Dongo Huaman
*/

// #region Consultas Servidor

class Consulta
{
    static URL_ENDPOINT = "http://localhost/personasFutbolitasProfesionales.php";
    
    /** #### 3- Generar una lista en memoria de la jerarquía de clases implementada en el punto 1
     * * En este caso use como bd el elemento table del doom.
     * *          XMLHttRequest - SI
     * *    Funcion Asincronica - NO
     * *               Promesas - NO
     */
    static _GET()
        {
            const ID_SPINNER = "formListaSpinner";
            const ID_RES = "formListaRes";

            Pantalla.bloquear();
            Spinner.mostrar(ID_SPINNER);

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4)
                {
                    Spinner.ocultar(ID_SPINNER);

                    switch(xhttp.status)
                    {
                        case 200:
                            Tabla.set_array(JSON.parse(xhttp.responseText));
                            Res.mostrar_ok(ID_RES, `Exito se cargaron ${Tabla.get_array().length} registros`);
                        break;

                        default:
                            Res.mostrar_error(ID_RES, "Error hubo un problema con el servidor");
                        break;
                    }

                    setTimeout(function() {
                        Pantalla.desbloquear();
                        Res.ocultar(ID_RES);
                    }, 2000);
                }
            };
            xhttp.open("GET", Consulta.URL_ENDPOINT, true);
            xhttp.send();
    }


    /** #### 4- Implementar Funcionalidad de "Alta"
     * *          XMLHttRequest - NO
     * *    Funcion Asincronica - SI
     * *               Promesas - SI
     */
    static _PUT(p_entidad)
    {
        const ID_SPINNER = "formAbmSpinner";
        const ID_RES = "formAbmRes";

        if(p_entidad)
        {
            new Promise(async (exito, error) => {

                Pantalla.bloquear();
                Spinner.mostrar(ID_SPINNER);

                const RESPONSE = await fetch(Consulta.URL_ENDPOINT, {
                    method: "PUT",
                    headers:  {
                        "Content-Type": "application/json",
                    },
                    body: p_entidad.toString()
                });

                const TEXTO = await RESPONSE.text();

                Spinner.ocultar(ID_SPINNER);

                if(RESPONSE.ok)
                {
                    exito(TEXTO);
                }
                else
                {
                    // No utilizo el response.text() ERROR del endpoint, porque valido todos los inputs
                    // Osea es dificil que se envie una estructura incorrecta
                    error("Hubo un problema con el servidor");
                }
            })
            .then((texto) => {

                p_entidad.id = JSON.parse(texto).id;
                Tabla.alta(p_entidad);
                Res.mostrar_ok(ID_RES, "Exito");
            })
            .catch((texto) => {

                Res.mostrar_error(ID_RES, texto);
            })
            .finally((x) => {

                setTimeout(function() {

                    Pantalla.desbloquear();
                    Res.ocultar(ID_RES);
                    Form.mostrar_lista();
                }, 2000);
            });
        }
    }


    /** #### 5- Implementar Funcionalidad de "Modificación".
     * *          XMLHttRequest - NO
     * *    Funcion Asincronica - NO
     * *               Promesas - SI
     */
    static _POST(p_entidad)
    {
        const ID_SPINNER = "formAbmSpinner";
        const ID_RES = "formAbmRes";

        if(p_entidad)
        {
            Pantalla.bloquear();
            Spinner.mostrar(ID_SPINNER);

            fetch(Consulta.URL_ENDPOINT, {
                method: "POST",
                headers:  {
                    "Content-Type": "application/json",
                },
                body: p_entidad.toString()
            })
            .then((response)=> {

                response.text()
                .then((texto) => {

                    Spinner.ocultar(ID_SPINNER);
                    Tabla.modificar(p_entidad);
                    Res.mostrar_ok(ID_RES, texto);
                });
            })
            .catch((response) => {

                response.text()
                .then((texto) => {

                    Spinner.ocultar(ID_SPINNER);
                    Res.mostrar_error(ID_RES, texto);
                });
            })
            .finally((x) => {

                setTimeout(function() {

                    Pantalla.desbloquear();
                    Res.ocultar(ID_RES);
                    Form.mostrar_lista();
                }, 2000);
            });
        }
    }
    

    /** #### 6- Implementar Funcionalidad de "Eliminación".
     * *          XMLHttRequest - A eleccion
     * *                  Fetch - A eleccion
     * *               Promesas - A eleccion
     */
    static _DELETE(p_entidad)
    {
        const ID_SPINNER = "formAbmSpinner";
        const ID_RES = "formAbmRes";

        Pantalla.bloquear();
        Spinner.mostrar(ID_SPINNER);

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {

            if (xhttp.readyState == 4)
            {
                Spinner.ocultar(ID_SPINNER);

                if(xhttp.status == 200)
                {
                    if(Tabla.baja(p_entidad))
                    {
                        Res.mostrar_ok(ID_RES, xhttp.responseText);
                    }
                    else
                    {
                        Res.mostrar_ok(ID_RES, "Baja cancelada");
                    }
                }
                else
                {
                    Res.mostrar_error(ID_RES, xhttp.responseText);
                }

                setTimeout(function() {

                    Pantalla.desbloquear();
                    Res.ocultar(ID_RES);
                    Form.mostrar_lista();
                }, 2000);
            }
        };
        xhttp.open("DELETE", Consulta.URL_ENDPOINT, true);
        xhttp.setRequestHeader('Content-type', 'application/json');
        xhttp.send(p_entidad.toString());
    }
}

// #endregion Consultas Servidor




/*
    Laboratorio III - Segundo Parcial
    Div. 3°C
    Juan Pablo Dongo Huaman
*/

// #region Eventos

class Evento
{
    static modo_alta(e)
        {
            Form.modo_alta();
            Input.limpiar();
            Form.mostrar_abm();
    }
    static modo_baja(e)
        {
            Form.modo_baja();
            Form.mostrar_abm();
            Form.set_entidad(e.currentTarget.closest('tr').getAttribute("id"));
    }
    static modo_modificar(e)
        {
            Form.modo_modificar();
            Form.mostrar_abm();
            Form.set_entidad(e.currentTarget.closest('tr').getAttribute("id"));
    }
    static ocultar_abm(e)
        {
            Form.mostrar_lista();
    }
    static mostrar_abm(e)
        {
            Form.mostrar_abm();
    }
    static actualizar_tipo(e)
        {
            switch($("comboxTipo").value)
            {
                case "default":
                    $("inputEquipo").style.display = "none";
                    $("inputPosicion").style.display = "none";
                    $("inputCantidadGoles").style.display = "none";
                    $("inputTitulo").style.display = "none";
                    $("inputFacultad").style.display = "none";
                    $("inputAñoGraduacion").style.display = "none";
                    break;
    
                case "futbolista":
                    $("inputEquipo").style.display = "flex";
                    $("inputPosicion").style.display = "flex";
                    $("inputCantidadGoles").style.display = "flex";
                    $("inputTitulo").style.display = "none";
                    $("inputFacultad").style.display = "none";
                    $("inputAñoGraduacion").style.display = "none";
                    break;
    
                case "profesional":
                    $("inputEquipo").style.display = "none";
                    $("inputPosicion").style.display = "none";
                    $("inputCantidadGoles").style.display = "none";
                    $("inputTitulo").style.display = "flex";
                    $("inputFacultad").style.display = "flex";
                    $("inputAñoGraduacion").style.display = "flex";
                    break;
            }
    }
    static operacion(e)
        {
            switch(Form.operacion)
            {
                case "alta":
                    if(Input.validar_entidad())
                    {
                        Consulta._PUT(Input.get_entidad());
                    }
                break;
    
                case "baja":
                    Consulta._DELETE(Input.get_entidad());
                break;
    
                case "modificar":
                    if(Input.validar_entidad())
                    {
                        Consulta._POST(Input.get_entidad());
                    }
                break;
            }
    }
}

// #endregion Eventos
    



/*
    Laboratorio III - Segundo Parcial
    Div. 3°C
    Juan Pablo Dongo Huaman
*/

Spinner.ocultar("formAbmSpinner");
Spinner.ocultar("formListaSpinner");

$("btnAgregar").addEventListener("click", Evento.modo_alta);
$("comboxTipo").addEventListener("change", Evento.actualizar_tipo);
$("btnAceptar").addEventListener("click", Evento.operacion);
$("btnCancelar").addEventListener("click", Evento.ocultar_abm);
    
Consulta._GET();

    