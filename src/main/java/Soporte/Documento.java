
package Soporte;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity()
@Table(name="Documento")
public class Documento {

    @Id private int id;    
    @Column(name="nombre") private String nombre;
    
    public Documento() {
    }
   
}
