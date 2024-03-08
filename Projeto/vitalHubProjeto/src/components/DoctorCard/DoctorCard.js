import { DoctorContainer, DoctorContent, DoctorContentImage, DoctorText, DoctorTitle, DoctorTouchable } from "./Style"

export const DoctorCard = ({
    onPress,
    doctorName,
    doctorRole,
}) => {
    return (
        <DoctorContainer>
            <DoctorTouchable onPress={onPress}>
                <DoctorContentImage source={{ uri: "https://lumiere-a.akamaihd.net/v1/images/dr_strange_2016_002_bcd5d6a3.jpeg" }} />

                <DoctorContent>
                    <DoctorTitle>{doctorName}</DoctorTitle>

                    <DoctorText>{doctorRole}</DoctorText>
                </DoctorContent>
            </DoctorTouchable>
        </DoctorContainer>
    )
}