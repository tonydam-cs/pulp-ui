from pulpcore.plugin import PulpPluginAppConfig


class Pulp-UiPluginAppConfig(PulpPluginAppConfig):
    """Entry point for the ui plugin."""

    name = "pulp_ui.app"
    label = "ui"
