package com.ffwatl.admin.catalog.domain.presenter;


/**
 * Class for hold image file information. There are such parameters:
 *      url - image server url;
 *      size - file size of current image;
 *      name - original image name.
 */
public class ProductImage {

    private String url;
    private long size;
    private String name;

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public long getSize() {
        return size;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setSize(long size) {
        this.size = size;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "ProductImage{" +
                "url='" + url + '\'' +
                ", size='" + size + '\'' +
                '}';
    }
}