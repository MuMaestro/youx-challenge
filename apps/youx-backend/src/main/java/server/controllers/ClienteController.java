package server.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.NonNull;
import server.dtos.ClienteRecordDto;
import server.models.ClienteModel;
import server.repositories.ClienteRepository;

@RestController
@RequestMapping("/cliente")
public class ClienteController {

	@Autowired
	ClienteRepository clienteRepository;

	@PostMapping({ "", "/" })
	public ResponseEntity<ClienteModel> createCliente(@RequestBody @Valid @NonNull ClienteRecordDto cliente) {
		ClienteModel clienteModel = new ClienteModel();
		BeanUtils.copyProperties(cliente, clienteModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(clienteRepository.saveAndFlush(clienteModel));
	}

	@PostMapping({ "/{id}", "/{id}/" })
	public ResponseEntity<ClienteModel> updateCliente(@PathVariable(value = "id") @NonNull UUID id, @RequestBody @Valid @NonNull ClienteRecordDto cliente) {
		var clienteModelO = clienteRepository.findById(id);
		if(clienteModelO.isPresent()) {
			var clientModel = clienteModelO.get();
			BeanUtils.copyProperties(cliente, clientModel);
			return ResponseEntity.ok().body(clienteRepository.saveAndFlush(clientModel));
		}
		return ResponseEntity.badRequest().body(null);
	}

	@GetMapping({ "/list", "/list/" })
	public ResponseEntity<List<ClienteModel>> listCliente() {
		return ResponseEntity.ok().body(clienteRepository.findAll());
	}

}
