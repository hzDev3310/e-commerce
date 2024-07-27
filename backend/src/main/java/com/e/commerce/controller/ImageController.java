package com.e.commerce.controller;


import com.e.commerce.model.Image;
import com.e.commerce.service.ImageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile file) {
        try {
            // Store the image and get the stored Image object
            Image image = imageService.storeImage(file);

            ObjectMapper objectMapper = new ObjectMapper();
            Map<String, String> response = new HashMap<>();
            response.put("imageId", image.getId().toString());

            String jsonResponse = objectMapper.writeValueAsString(response);

            return ResponseEntity.ok(jsonResponse);

        } catch (IOException e) {
            // Return error message if something goes wrong
            return ResponseEntity.status(500).body("Could not upload image: " + e.getMessage());
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Optional<Image> imageOptional = imageService.getImage(id);
        if (imageOptional.isPresent()) {
            Image image = imageOptional.get();
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(image.getType()))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + image.getName() + "\"")
                    .body(image.getData());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<Iterable<Image>> getAllImages() {
        Iterable<Image> images = imageService.getAllImages();
        return ResponseEntity.ok(images);
    }
}
