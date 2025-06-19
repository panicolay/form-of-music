import { Page } from '@/components/layout';
import { Nothing, PathDissolved, DoorNowhere } from '@/components/svg';
import { Button } from '@/components/ui';

function getNotFoundMessages() {
  const messages = [
    {
      alt: 'Nothing',
      image: Nothing,
      title: 'There is nothing',
      line1: 'The greatest form is the formless',
      line2: 'the most perfect page',
      line3: 'does not need to be loaded',
      button: 'Explore the known',
    },
    {
      alt: 'Path dissolved',
      image: PathDissolved,
      title: 'The path dissolved',
      line1: 'What you seek has wandered elsewhere',
      line2: 'perhaps it never was',
      line3: 'yet another find awaits',
      button: 'Find another way',
    },
    {
      alt: 'Door to nowhere',
      image: DoorNowhere,
      title: 'A door to nowhere',
      line1: 'What may have been here became absence',
      line2: 'even memories fade eventually',
      line3: 'plenty more to live',
      button: 'Choose presence',
    },
  ];

  const messageIndex =
    Math.floor(Date.now() / (1000 * 60 * 60)) % messages.length;
  return messages[messageIndex];
}

export default function NotFound() {
  const messages = getNotFoundMessages();

  return (
    <Page align="center" topBar="minimal" width="medium">
      <messages.image />
      <h2 className="font-poppins font-medium text-2xl uppercase">
        {messages.title}
      </h2>
      <p className="text-sm text-center">
        {messages.line1}
        <br />
        <span className="italic text-zinc-400">— {messages.line2} —</span>
        <br />
        {messages.line3}
      </p>
      <Button className="border" href="/">
        {messages.button}
      </Button>
    </Page>
  );
}
