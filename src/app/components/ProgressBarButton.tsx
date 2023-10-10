import { useEffect, useState } from "react";
import { Player } from "../models/Player";
import { generateItem, getGold } from "../game";

interface ProgressBarButtonProps {
    player: Player;
    setMoney: (newMoney: number) => void;
    addLog: (message: string) => void; // Include addLog in the interface
}

const ProgressBarButton: React.FC<ProgressBarButtonProps> = ({ player, setMoney }) => {
    const [loading, setLoading] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const handleButtonClick = () => {

        setLoading(true);

        let currentMoney = player.money;
        const itemRoll = Math.random();
        if (itemRoll >= 0.5) {
            const item = generateItem(player);
            addLog(`Found item ${item.name}`);
        } else {
            addLog(`Found ${player.clickPower} gold!`);
            getGold(player);

        }
        setMoney(parseFloat(currentMoney.toFixed(2)));

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const addLog = (message: string) => {
        setLogs((prevLogs) => {
            const newLogs = [...prevLogs, message].slice(-6);
            return newLogs;
        });
    };

    useEffect(() => {
        return () => {
            setLogs([]);
        };
    }, []);

    return (
        <div className="progress-button-container">
            <button
                className={`progress-button ${loading ? 'loading' : ''}`}
                onClick={handleButtonClick}
                disabled={loading}
            >
                {loading ? 'Dig' : 'Dig'}
                {loading && <div className="progress-bar" />}
            </button>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProgressBarButton; 
