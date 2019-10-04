package com.nsis.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "books")
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	public Book() {
	}

	// Getters et Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
@Column(name="Titre", nullable = false)
	String Titre;

	public void setTitre(String Titre){
		this.Titre = Titre;
	}
	public String getTitre(){
		return Titre;
}


@Column(name="auteur", nullable = false)
	String auteur;

	public void setAuteur(String auteur){
		this.auteur = auteur;
	}
	public String getAuteur(){
		return auteur;
}


@Column(name="année", nullable = false)
	int année;

	public void setAnnée(int année){
		this.année = année;
	}
	public int getAnnée(){
		return année;
}


}
