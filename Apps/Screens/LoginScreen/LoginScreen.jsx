import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import Colors from '../../Utils/Colors';

const videoSource = 'https://videos.pexels.com/video-files/6774385/6774385-uhd_1440_2560_30fps.mp4';

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
                    <Text style={styles.subtitleText}>The Ultimate place to fulfill your potential</Text>

                    {/* Sign-in Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={()=>console.log('Email Login')}>
                            <Image
                                source={require('../../../assets/email.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>console.log('Google Login')}>
                            <Image
                                source={require('../../../assets/google.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>console.log('Facebook Login')}>
                            <Image
                                source={require('../../../assets/facebook.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Facebook</Text>
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
        width: '60%',
        marginTop: 250,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10, // Remove vertical padding to condense the height
        paddingHorizontal: 10, // Minimal horizontal padding between logo and text
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: Colors.WHITE,
        justifyContent: 'flex-start', // Align items to the left, no extra space
        width: 'auto', // Auto width to fit content (logo + text)
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 8, // Small space between the logo and text
    },
    buttonText: {
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
        fontSize: 16,
        textAlign: 'left', // Align text to the left
        marginLeft: 10, // Small gap between the logo and text (remove flex: 1)
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