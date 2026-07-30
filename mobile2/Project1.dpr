program Project1;

uses
  Vcl.Forms,
  Unit1 in 'Unit1.pas' {nm};

{$R *.res}

begin
  Application.Initialize;
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(Tnm, nm);
  Application.Run;
end.
