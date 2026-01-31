import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ScanCardScreen: React.FC = () => {
    const [scannedData, setScannedData] = useState<string>('');

    const handleScan = () => {
        setScannedData('John Doe | john@example.com | 555-1234');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Scan Business Card</Text>
            
            <TouchableOpacity style={styles.button} onPress={handleScan}>
                <Text style={styles.buttonText}>Start Scanning</Text>
            </TouchableOpacity>

            {scannedData && (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>{scannedData}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    resultBox: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    resultText: {
        fontSize: 14,
        color: '#333',
    },
});