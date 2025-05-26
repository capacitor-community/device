package com.ryltsov.alex.plugins.device;

import android.util.Log;

public class Device {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
