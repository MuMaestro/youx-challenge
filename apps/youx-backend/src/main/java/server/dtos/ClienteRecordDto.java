package server.dtos;

import jakarta.validation.constraints.NotBlank;

public record ClienteRecordDto(String id, @NotBlank String name, @NotBlank String email, @NotBlank String cnpj, @NotBlank String telefone, @NotBlank String uf) {

}
