/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    InputType: ComponentFramework.PropertyTypes.EnumProperty<"Seconds" | "Minutes" | "Hours" | "Days">;
    OutputType: ComponentFramework.PropertyTypes.EnumProperty<"Seconds" | "Minutes" | "Hours" | "Days">;
    Value: ComponentFramework.PropertyTypes.DecimalNumberProperty;
}
export interface IOutputs {
}
