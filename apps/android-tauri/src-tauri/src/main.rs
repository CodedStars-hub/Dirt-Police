// Desktop entry point (unused on Android, kept so `tauri dev` works on a laptop).
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    dirtpolice_lib::run();
}
