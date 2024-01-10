{
    "targets": [
        {
            "target_name": "v4l2_binding",
            "sources": [
                "src/native/v4l2_binding.cpp"
            ],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "defines": [
                "NAPI_DISABLE_CPP_EXCEPTIONS"
            ],
			"libraries": [
                "<!@(pkg-config --cflags --libs libv4l2)",
            ]
        },
		{
            "target_name": "v4l2_constants",
            "sources": [
				"src/native/v4l2_constants.cpp",
            ],
            "include_dirs": [
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            "dependencies": [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "defines": [
                "NAPI_DISABLE_CPP_EXCEPTIONS"
            ]
        }
    ]
}