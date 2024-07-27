package com.e.commerce.model;

import jakarta.persistence.*;



@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    @Column(columnDefinition="BLOB NOT NULL")
    @MapKeyColumn(columnDefinition="BLOB NOT NULL")
    @Lob
    private byte[] data;

    // Constructors, getters, and setters

    public Image() {
    }

    public Image(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
