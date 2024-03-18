package server.dtos;

import java.util.Currency;
import java.util.Date;

import jakarta.validation.constraints.NotBlank;
import server.models.ClienteModel;
import server.models.VendaStatusEnumModel;

public record VendaRecordDto(Date data, @NotBlank Currency valor, @NotBlank ClienteModel cliente, @NotBlank VendaStatusEnumModel status) {
	
}
