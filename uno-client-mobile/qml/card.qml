import QtQuick 2.0

Item {
    // property alias _color: "#33ff00"
    // property alias _symbol
    property double _width: 5.6
    property double _height: 8.7

    Rectangle {
        id: bg
        width: _width * 45
        height: _height * 45
        radius: 20
        color: "#ffffff"

        Rectangle {
            anchors.margins: 12
            z: 10
            radius: 20
            anchors.fill: parent
            color: "#f44336"

            /*
            Text {
                id: bg_txt
                anchors.fill: parent
                font.pixelSize: 220
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                // font.bold: true
                font.underline: text === "6" || text === "9"
                text: "6"
                font.family: "Arial"
                color: "#000000"
            }
            */

            Text {
                id: fr_txt
                anchors.fill: parent
                font.pixelSize: (_height * 45) / 2
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                font.underline: text === "6" || text === "9"
                text: "6"
                font.family: "Arial"
                color: "#ffffff"
            }

            Text {
                id: esq_sup_izq
                color: "#ffffff"
                text: "6"
                anchors.left: parent.left
                anchors.top: parent.top
                font.pixelSize: _height * 5
                font.underline: text === "6" || text === "9"
                anchors.leftMargin: 12
                anchors.topMargin: 12
            }
            Text {
                id: esq_inf_der
                color: "#ffffff"
                text: "6"
                anchors.right: parent.right
                anchors.bottom: parent.bottom
                font.pixelSize: _height * 5
                rotation: 180
                font.underline: text === "6" || text === "9"
                anchors.rightMargin: 12
                anchors.bottomMargin: 12
            }
        }
    }
}
