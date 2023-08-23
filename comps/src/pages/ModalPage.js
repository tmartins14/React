import { useState } from "react";
import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an import aggreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        sollicitudin nisl nec urna ullamcorper feugiat. Curabitur in nibh et dui
        feugiat mattis. Duis pharetra urna in mi placerat, at laoreet est
        ornare. Sed aliquam nisl vitae nisi fringilla mattis. Vestibulum a
        finibus nibh, fermentum sollicitudin orci. Ut quis vehicula ex. Vivamus
        fermentum sit amet nibh sit amet tempus. Sed sagittis sit amet felis et
        posuere. In faucibus, diam sed bibendum vulputate, nulla velit elementum
        ligula, sed commodo justo odio sit amet dui. Maecenas massa sem, porta
        sit amet pulvinar ut, suscipit vitae dolor. Proin ultrices est ac ipsum
        volutpat, ac congue elit sodales. Aliquam laoreet justo libero, a
        ultricies neque iaculis at. Suspendisse et bibendum dui. Proin viverra
        lectus ipsum, quis luctus ex porta ac. Praesent accumsan in urna et
        laoreet. Curabitur efficitur lectus nec enim placerat, eget vulputate
        urna interdum. Nulla non magna gravida, bibendum enim ac, tincidunt
        felis. Nulla et lobortis lectus, sit amet consectetur lacus. Aliquam
        erat volutpat. Vivamus ligula erat, dapibus non dictum scelerisque,
        luctus at lorem. Praesent interdum, velit ac finibus efficitur, ex purus
        maximus tellus, nec tincidunt eros nisi et nibh. Sed et lobortis odio.
        Etiam sit amet elit mattis, gravida velit sed, dapibus risus. Proin in
        ullamcorper nulla. Nunc sollicitudin dolor hendrerit odio viverra
        aliquam. Nunc scelerisque varius elit ut condimentum. Nunc eleifend mi
        sit amet feugiat sodales. Donec rutrum elit nec dui gravida consectetur.
        Aenean venenatis dui sit amet aliquet rutrum. Fusce vitae semper felis,
        sed tristique justo. Duis a erat ultricies, posuere lorem sed, eleifend
        quam. Nam at urna at magna consequat varius scelerisque vel mauris.
        Pellentesque felis metus, vulputate at vestibulum in, volutpat sit amet
        risus. Curabitur pharetra justo ex, at vulputate tellus vestibulum ac.
        Aenean ut feugiat nisi, sit amet semper lorem. Nulla facilisi. Nam nec
        felis eu libero rhoncus interdum. Ut sodales in nunc ac elementum. Fusce
        ultricies nibh eget dolor ultricies, sed ultrices nulla convallis. Donec
        porttitor maximus varius. Fusce urna est, finibus sed maximus sed,
        tempor in magna. Nunc posuere, arcu sit amet fermentum rhoncus, lacus
        lorem tempus mauris, a sodales nunc arcu vitae purus. Mauris in felis
        justo. Nullam fermentum aliquet mi, sed elementum elit eleifend ac. Sed
        suscipit lectus eu justo placerat mattis. Integer quis lacinia dui.
        Mauris nunc eros, dignissim sed nisi nec, maximus volutpat ligula. Duis
        id malesuada lectus, in bibendum mi. Nunc non arcu vel eros ullamcorper
        pellentesque. Nam vitae nulla at lacus ultrices vehicula nec at velit.
        Aliquam ut turpis at sem cursus imperdiet ut in eros. Integer tempus
        dapibus leo ut consequat.
      </p>
    </div>
  );
};

export default ModalPage;
