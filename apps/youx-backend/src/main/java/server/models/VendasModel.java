package server.models;

import java.io.Serializable;
import java.util.Currency;
import java.util.Date;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "vendas")
public class VendasModel implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private Date data;
	private Currency valor;
	@ManyToOne
	private ClienteModel cliente;
	@Enumerated(EnumType.STRING)
	private VendaStatusEnumModel status;
}
