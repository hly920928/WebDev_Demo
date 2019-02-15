  attribute vec4 vertexPosition;

    void main()
    {
        gl_PointSize = 2.0;
        gl_Position = vertexPosition;
    }