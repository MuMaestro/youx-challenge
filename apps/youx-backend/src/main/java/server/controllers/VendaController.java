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
import server.dtos.VendaRecordDto;
import server.models.VendaModel;
import server.repositories.VendaRepository;

@RestController
@RequestMapping("/venda")
public class VendaController {

	@Autowired
	VendaRepository vendaRepository;

	@PostMapping({ "", "/" })
	public ResponseEntity<VendaModel> createVenda(@RequestBody @Valid @NonNull VendaRecordDto venda) {
		VendaModel vendaModel = new VendaModel();
		BeanUtils.copyProperties(venda, vendaModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(vendaRepository.saveAndFlush(vendaModel));
	}

	@PostMapping({ "/{id}", "/{id}/" })
	public ResponseEntity<VendaModel> updateVenda(@PathVariable(value = "id") @NonNull UUID id, @RequestBody @Valid @NonNull VendaRecordDto venda) {
		var vendaModelO = vendaRepository.findById(id);
		if(vendaModelO.isPresent()) {
			var vendaModel = vendaModelO.get();
			BeanUtils.copyProperties(venda, vendaModel);
			return ResponseEntity.ok().body(vendaRepository.saveAndFlush(vendaModel));
		}
		return ResponseEntity.badRequest().body(null);
	}

	@GetMapping({ "/list", "/list/" })
	public ResponseEntity<List<VendaModel>> listVenda() {
		return ResponseEntity.ok().body(vendaRepository.findAll());
	}

}
