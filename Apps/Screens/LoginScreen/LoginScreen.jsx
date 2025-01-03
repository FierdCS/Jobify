import React, { useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import Colors from '../../Utils/Colors';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth, useSignIn } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

const videoSource = 'https://videos.pexels.com/video-files/6774385/6774385-uhd_1440_2560_30fps.mp4';

// Complete any pending auth sessions for WebBrowser
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    const { signIn, isLoaded } = useSignIn();
    const router = useRouter();

    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    useWarmUpBrowser(); // Prepare the browser for OAuth

    // Google OAuth
    const { startOAuthFlow: startGoogleOAuth } = useOAuth({ strategy: 'oauth_google' });
    const handleGoogleLogin = useCallback(async () => {
        try {
            const { createdSessionId } = await startGoogleOAuth();
            if (createdSessionId) {
                setActive?.({ session: createdSessionId });
            } else {
                console.warn('Handle additional sign-in or MFA steps if necessary');
            }
        } catch (err) {
            console.error('Google OAuth login failed:', err);
        }
    }, [startGoogleOAuth]);

    // Facebook OAuth
    const { startOAuthFlow: startFacebookOAuth } = useOAuth({ strategy: 'oauth_facebook' });
    const handleFacebookLogin = useCallback(async () => {
        try {
            const { createdSessionId } = await startFacebookOAuth();
            if (createdSessionId) {
                setActive?.({ session: createdSessionId });
            } else {
                console.warn('Handle additional sign-in or MFA steps if necessary');
            }
        } catch (err) {
            console.error('Facebook OAuth login failed:', err);
        }
    }, [startFacebookOAuth]);

    // Email Login
    const handleEmailLogin = useCallback(async () => {
        if (!isLoaded) {
            console.warn('Sign-in is not loaded yet.');
            return;
        }
        try {
            router.replace('/sign-in'); // Adjust the path if necessary
        } catch (err) {
            console.error('Email sign-in failed:', err);
        }
    }, [isLoaded, router]);

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
                    <Text style={styles.titleText}>Jobify</Text>
                    <Text style={styles.subtitleText}>Ultimate place to explore your potential</Text>

                    {/* Sign-in Buttons */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleEmailLogin}>
                            <Image
                                source={require('../../../assets/email.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
                            <Image
                                source={require('../../../assets/google.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.buttonText}>Sign in with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={handleFacebookLogin}>
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
        justifyContent: 'space-between',
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
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: Colors.WHITE,
        justifyContent: 'flex-start',
        width: 'auto',
    },
    logo: {
        width: 24,
        height: 24,
        marginRight: 8,
    },
    buttonText: {
        fontFamily: 'outfit-bold',
        color: Colors.BLACK,
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 10,
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
