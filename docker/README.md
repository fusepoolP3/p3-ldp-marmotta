# Fusepool P3 LDP-Marmotta Docker Image

## Building

    docker build -t fusepoolp3/ldp-marmotta .
    
## Running

Since the requires postgresql you should first start this:

    docker run --name p3ldp-postgres -d postgres
    
Then run the image with:

    docker run --link p3ldp-postgres:postgres -p 8080:8080 -d  fusepoolp3/ldp-marmotta
