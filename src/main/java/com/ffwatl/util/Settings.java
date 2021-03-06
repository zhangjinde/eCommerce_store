package com.ffwatl.util;


public class Settings {

    private final String photoUrl;

    private final String photoDir;

    private String brandImgUrl;
    private String brandImgDir;

    public Settings(String photoUrl, String photoDir){
        this.photoDir = photoDir;
        this.photoUrl = photoUrl;
    }

    public String getPhotoUrl() {
        return this.photoUrl;
    }

    public  String getPhotoDir() {
        return this.photoDir;
    }

    public String getBrandImgUrl() {
        return brandImgUrl;
    }

    public String getBrandImgDir() {
        return brandImgDir;
    }

    public void setBrandImgUrl(String brandImgUrl) {
        this.brandImgUrl = brandImgUrl;
    }

    public void setBrandImgDir(String brandImgDir) {
        this.brandImgDir = brandImgDir;
    }
}