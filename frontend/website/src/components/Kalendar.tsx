import axios, { AxiosError } from "axios";
import { Box, Button, Group, Modal, Title } from "@mantine/core";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";
import { Notifications } from '@mantine/notifications';
import { useState } from "react";
import classes from "../styles/Kalender.module.css";
import API from "../helpers/API";
import { emojisplosion } from "emojisplosion";

export function KalenderTitle() {
    const emotes = [
        'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f72b23385e8c47d587a53aa41685c074/default/light/3.0',
        'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_df607bb302024eae96e96747a5ddb6e9/default/light/3.0'
    ]

    const isMobile = useMediaQuery(`(max-width: 900px)`);

    return (
        <>
            <Box style={{ textAlign: 'center' }}>
                <Group justify="center">
                    <img src={emotes[0]} hidden={isMobile} style={{ width: "4vw" }}></img>
                    <Title order={1} style={{ fontSize: isMobile ? "10vw" : "4vw" }} className={classes.KalenderTitle}>
                        Adventskalender
                    </Title>
                    <img src={emotes[1]} style={{ width: isMobile ? "13vw" : "4vw" }}></img>
                </Group>
            </Box>
        </>
    )
}

export function Kalender() {
    const isMobile = useMediaQuery(`(max-width: 900px)`);
    const [opened, { open, close }] = useDisclosure(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    const [modalImage, setModalImage] = useState("");
    const [modalVideo, setModalVideo] = useState("");
    const [modalButtonLink, setModalButtonLink] = useState("");
    const [modalButtonText, setModalButtonText] = useState("");
    const [modalButtonDisabled, setModalButtonDisabled] = useState(false);
    const largeButtons = [4, 6, 11, 13, 21, 24];
    const colorMap: { [key: number]: string } = {
        1: "gridItem_color_2",
        2: "gridItem_color_5",
        3: "gridItem_color_3",
        4: "gridItem_color_4",
        5: "gridItem_color_1",
        6: "gridItem_color_2",
        7: "gridItem_color_3",
        8: "gridItem_color_1",
        9: "gridItem_color_5",
        10: "gridItem_color_4",
        11: "gridItem_color_1",
        12: "gridItem_color_2",
        13: "gridItem_color_4",
        14: "gridItem_color_3",
        15: "gridItem_color_5",
        16: "gridItem_color_4",
        17: "gridItem_color_2",
        18: "gridItem_color_1",
        19: "gridItem_color_3",
        20: "gridItem_color_5",
        21: "gridItem_color_2",
        22: "gridItem_color_1",
        23: "gridItem_color_3",
        24: "gridItem_color_4",
    };

    const tuerchen = async (number: number) => {
        try {
            const res = await axios.get(API.TUERCHEN + number);
            setModalTitle(res.data.title);
            setModalContent(res.data.content);
            setModalImage(res.data.image);
            setModalVideo(res.data.video);
            setModalButtonLink(res.data.buttonLink);
            setModalButtonText(res.data.buttonText);
            setModalButtonDisabled(res.data.buttonDisabled);
            emojisplosion({
                emojis: ['🎁', '🎄', '❄️', '⛄', '🌟', '🕯️'],
                physics: {
                    fontSize: 50,
                    gravity: 0.4,
                    framerate: 20
                },
                position: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
            })
            open();
        } catch (error) {
            const errorMessage = (error as AxiosError<{ message: string }>).response?.data?.message || (error as Error).message;
            if (errorMessage === 'Request failed with status code 403') {
                Notifications.show({
                    title: 'Türchen ist noch geschlossen',
                    message: 'Bitte warte bis zum ' + number + '. Dezember',
                    color: 'red',
                    autoClose: 5000
                })
            } else {
                Notifications.show({
                    title: 'Fehler beim Öffnen des Türchens',
                    message: errorMessage,
                    color: 'red',
                    autoClose: 5000
                })
            }
        }
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title={modalTitle} centered size="xl">
                <Modal.Body>
                    {modalVideo !== "" ?
                        <video src={modalVideo} loop autoPlay style={{
                            width: "100%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block"
                        }}></video>
                        : <></>}
                    {modalImage !== "" ?
                        <img src={modalImage} style={{
                            width: "50%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            display: "block"
                        }}></img>
                        : <></>}
                    {modalContent !== "" ?
                        <>
                            <br />
                            {modalContent}
                        </>
                        : <></>}
                    {modalButtonLink !== "" ?
                        <Button
                            onClick={() => {
                                window.open(modalButtonLink, "_blank");
                            }}
                            style={{ marginTop: "1rem" }}
                            fullWidth
                            color="pink"
                            disabled={modalButtonDisabled}
                        >
                            {modalButtonText}
                        </Button>
                        : <></>}
                </Modal.Body>
            </Modal>
            <Box className={isMobile ? classes.grid_mobile : classes.grid}>
                {Array.from({ length: 24 }, (_, index) => index + 1).map((number) => (
                    <button
                        key={number}
                        className={[
                            isMobile ? classes.gridItem_mobile : classes.gridItem,
                            isMobile
                                ? `${largeButtons.includes(number) ? classes.gridItem_large_mobile : ""} ${classes[`gridItem_mobile_${number}`]}`
                                : `${largeButtons.includes(number) ? classes.gridItem_large : ""} ${classes[`gridItem_${number}`]}`,
                            classes[colorMap[number]],
                        ]
                            .filter((className) => className !== null)
                            .join(" ")}
                        onClick={() => { tuerchen(number); }}
                    >
                        <span className={classes.gridItemBox}>{number}</span>
                    </button>
                ))}
            </Box>
        </>
    );
}
