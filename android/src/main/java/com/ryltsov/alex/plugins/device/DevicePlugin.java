package com.ryltsov.alex.plugins.device;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Device")
public class DevicePlugin extends Plugin {

    private Device implementation;

    @Override
    public void load() {
        implementation = new Device();
    }

    @PluginMethod
    public void getInfo(PluginCall call) {
        JSObject r = new JSObject();

        r.put("diskFree", implementation.getDiskFree());
        r.put("diskTotal", implementation.getDiskTotal());
        r.put("realDiskFree", implementation.getRealDiskFree());
        r.put("realDiskTotal", implementation.getRealDiskTotal());

        call.resolve(r);
    }
}
