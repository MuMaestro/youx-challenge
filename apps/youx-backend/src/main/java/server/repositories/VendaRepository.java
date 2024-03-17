package server.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import server.models.VendaModel;

public interface VendaRepository extends JpaRepository<VendaModel, UUID> {
	
}
