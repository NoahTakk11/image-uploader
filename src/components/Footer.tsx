export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="flex fixed justify-center items-end bottom-0 mb-2">
        <p className="text-sm">
          Created by{" "}
          <a
            className="text-sky-800 font-medium underline"
            href="https://gonzalovillavicencio.website/"
            target="blank"
          >
            Gonzalo Villavicencio
          </a>
        </p>
      </footer>
    </>
  );
}
