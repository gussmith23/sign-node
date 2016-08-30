use Device::MiniLED;
my $sign=Device::MiniLED->new(devicetype => "sign");
#
# add a text only message
#
$sign->addMsg(
    data => @ARGV[0],
    effect => "scroll",
    speed => 4
    );
$sign->send(device => "/dev/ttyUSB0");
