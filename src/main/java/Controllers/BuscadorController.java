/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controllers;

import Gestores.GestorBusqueda;
import Soporte.Documento;
import java.util.List;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

/**
 *
 * @author joel
 */
@Path("/")
public class BuscadorController {
    
    @Inject private GestorBusqueda gestorBusqueda;
    
    /*@GET
    public Response index()
    {
        return Response.ok("OK").build();
    }*/
    
    @GET
    public Response ResutladoBusqueda()
    {
        List<Documento> resultado= gestorBusqueda.buscar("mi string");
        return Response.ok("hola").build();
    }
    
}

