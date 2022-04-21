# LWC Communication between components
Several WebComponents.dev samples created to test these mechanism of communication between LWC components:

* **Drag'n Drop Forward communucation** : Tests how to send data from a source component and drag the info into the Drop component (siblings completely isolated by shadow DOM)
* **Drag'n Drop Bi-Directional communication** : Tests how we can receive data from a drag event into a drop event in the target compoenent and send back a confiramtion with data to the originating component.
* **Simple event over LWC Message Bus** : Test sending data using the LWC message bus to communicate events between otherwise isolated components
