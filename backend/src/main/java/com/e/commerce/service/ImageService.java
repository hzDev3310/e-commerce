package com.e.commerce.service;


import com.e.commerce.model.Image;
import com.e.commerce.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public Image storeImage(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String fileType = file.getContentType();
        byte[] data = file.getBytes();

        Image image = new Image(fileName, fileType, data);
        return imageRepository.save(image);
    }

    public Optional<Image> getImage(Long id) {
        return imageRepository.findById(id);
    }

    public Iterable<Image> getAllImages() {
        return imageRepository.findAll();
    }
}
