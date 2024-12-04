import { GameHostView } from '@/views/GameHost';

type Params = Promise<{ gameHost: string }>;



export default async function GameHostPage(props: {
    params: Params,
}) {
    const gameHost = (await props.params).gameHost;

    return (
        <GameHostView 
            gameId={gameHost} 
        />
    );
}