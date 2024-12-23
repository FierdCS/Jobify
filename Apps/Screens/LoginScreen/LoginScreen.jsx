import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import Colors from '../../Utils/Colors';

const videoSource = 'https://cdn.pixabay.com/video/2024/11/07/240330_large.mp4';

export default function LoginScreen() {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    return (
        <View style={styles.container}>
            <VideoView
                style={styles.video}
                player={player}
                contentFit="cover"
                nativeControls={false}
                disableGesture={true}
                disableControls={true}
            />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>Jobify </Text>
                    <Text style={styles.subtitleText}>Ultimate place to explore your potential</Text>

                    {/* Sign-in Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                source={require('../../../assets/google.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                source={require('../../../assets/facebook.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                source={require('../../../assets/email.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.copyrightText}>© 2024 Jobify, Inc. All rights reserved.</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between', // This will push content to top and bottom
    },
    textContainer: {
        alignItems: 'center',
        marginTop: '40%',
    },
    titleText: {
        fontFamily: 'outfit-bold',
        color: Colors.WHITE,
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitleText: {
        fontFamily: 'outfit-regular',
        color: Colors.WHITE,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '80%',
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: Colors.WHITE
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 0,
    },
    buttonText: {
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
        fontSize: 16,
        textAlign: 'center', // Centers text horizontally within its container
        flex: 1, // Allows the text to take up available space and centers relative to siblings
    },
    footer: {
        width: '100%',
        paddingVertical: 20,
        alignItems: 'center',
    },
    copyrightText: {
        fontSize: 12,
        color: Colors.WHITE,
    },
});